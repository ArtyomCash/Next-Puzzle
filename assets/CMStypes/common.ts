export type AssetModel = {
    id: number;
    name: string | null;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    url: string | null;
};

export type ButtonModel = {
    id: number,
    title: string | null;
    description: string | null;
    url: string | null;
    assets: AssetModel[];
};

export type BlockModel = {
    id: number;
    slug: string | null;
    title: string | null;
    subTitle: string | null;
    description: string | null;
    buttons: ButtonModel[];
    assets: AssetModel[];
    url: string | null;
};

export type PageModel = {
    id: number;
    slug: string;
    title: string | null;
    subTitle: string | null;
    description: string | null;
    locale: string | null;
    published_at: string;
    assets: AssetModel[];
    blocks: BlockModel[];
    buttons: ButtonModel[];
};