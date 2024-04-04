import { makeAutoObservable, autorun, runInAction } from "mobx";
import { Tag, TagsApiResponse } from "../types/types";
import ky from "ky";

const BASE_URL = `https://api.stackexchange.com/2.3/tags`;

class TagsStore {
  tags: Tag[] = [];
  page: number = 0;
  tagsPerPage: number = 5;
  searchQuery: string = "";
  order: "asc" | "desc" = "asc";
  orderBy: "name" | "popular" = "name";
  loading: boolean = false;
  alertMessage = "";

  constructor() {
    makeAutoObservable(this);
    this.getParams();

    autorun(() => {
      this.setParams();
      this.fetchTags();
    });
  }

  setAlert = (message: string) => {
    this.alertMessage = message;
  };

  cleanAlert = () => {
    if (this.alertMessage) {
      this.alertMessage = "";
    }
  };

  setPage = (newPage: number) => {
    this.page = Math.max(newPage, 1);
    this.cleanAlert();
  };

  setTagsPerPage = (newTagsPerPage: number) => {
    this.tagsPerPage = Math.min(Math.max(newTagsPerPage, 1), 100);
    this.cleanAlert();
  };

  setSearchQuery = (newSearchQuery: string) => {
    this.searchQuery = newSearchQuery;
    this.cleanAlert();
  };

  setOrder = (newOrder: "asc" | "desc") => {
    this.order = newOrder;
    this.cleanAlert();
  };

  setOrderBy = (newOrderBy: "name" | "popular") => {
    this.orderBy = newOrderBy;
    this.cleanAlert();
  };

  setLoading = (newLoading: boolean) => {
    this.loading = newLoading;
  };

  setTags = (newTags: Tag[]) => {
    this.tags = newTags;
  };

  handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    this.setPage(newPage + 1);
  };

  getParams = () => {
    const searchParams = new URLSearchParams(window.location.search);
    this.setPage(Number(searchParams.get("page")) || 1);
    this.setTagsPerPage(Number(searchParams.get("pagesize")) || 5);
    this.setSearchQuery(searchParams.get("inname") || "");
    this.setOrder(searchParams.get("order") === "desc" ? "desc" : "asc");
    this.setOrderBy(
      searchParams.get("sort") === "popular" ? "popular" : "name"
    );
  };

  setParams = () => {
    const searchParams = new URLSearchParams();
    searchParams.set("page", this.page.toString());
    searchParams.set("pagesize", this.tagsPerPage.toString());
    searchParams.set("order", this.order);
    searchParams.set("sort", this.orderBy);
    searchParams.set("inname", this.searchQuery);
    const newRelativePathQuery = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    window.history.pushState(null, "", newRelativePathQuery);
  };

  fetchTags = () => {
    runInAction(() => {
      this.setLoading(true);
    });

    const queryParams = new URLSearchParams({
      page: this.page.toString(),
      pagesize: this.tagsPerPage.toString(),
      order: this.order,
      sort: this.orderBy,
      inname: this.searchQuery,
      site: "stackoverflow",
    });

    const url = `${BASE_URL}?${queryParams}`;

    ky.get(url)
      .json<TagsApiResponse>()
      .then((data) => {
        runInAction(() => {
          this.setTags(data.items || []);
          this.setLoading(false);
        });
      })
      .catch((error) => {
        error.response
          .json()
          .then(
            (errorData: { error_message?: string; error_name?: string }) => {
              runInAction(() => {
                const errorName = errorData.error_name || "Unknown error";
                const errorMessage =
                  errorData.error_message || "unknown error occurred";
                console.error(error);
                this.setAlert(
                  `Failed to fetch tags. ${errorName}: ${errorMessage}`
                );
                this.setLoading(false);
              });
            }
          );
      });
  };
}

export const tagsStore = new TagsStore();
