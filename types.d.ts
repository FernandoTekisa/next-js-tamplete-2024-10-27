type Result = {
  pageid: string;
  title: string;
  extract: string;
  thumbanail?: {
    source: string;
    width: number;
    height: number;
  };
};

type SeactResult = {
  query?: {
    pages?: Result[];
  };
};
