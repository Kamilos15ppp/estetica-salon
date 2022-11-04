import { messages as M } from '../messages';

export interface Href {
	path: string,
	text: string,
}

export const Hrefs: Href[] = [
	{
		path: M.homepage.path,
		text: M.homepage.pathText,
	},
	{
		path: M.price.path,
		text: M.price.pathText,
	},
	{
		path: M.info.path,
		text: M.info.pathText,
	},
	{
		path: M.voucher.path,
		text: M.voucher.pathText,
	},
	{
		path: M.gallery.path,
		text: M.gallery.pathText,
	},
	{
		path: M.contact.path,
		text: M.contact.pathText,
	},
];
