export type itemDescrArray = { liDescrFirst: string; liNumberSpan: string };
export type secondItemDescrArray = { liNumSecond: string; liNumberSpan: string };
export type paragraphArray = { paragraph: string };

export type contentService = {
  title: string;
  id: string;
  img: string;
  paragraphBlock: paragraphArray[];
  itemDescr: itemDescrArray[];
  secondDescr: string;
  secondItemDescr: secondItemDescrArray[];
};

export type buttons = {
  buttonNav: string;
  id: string;
  yPx: number;
}
