import { visit } from "unist-util-visit";
import { whitespace } from "hast-util-whitespace";

export default function rehypeFigure(options = {}) {
	return (tree) => {
		// unwrap the images inside the paragraph
		visit(tree, { tagName: "p" }, (node, index, parent) => {
			if (!hasOnlyImages(node)) {
				return;
			}

			const image = node.children.find((child) => child.tagName === "img");

			if (image.properties.title) {
				node.children.push({type: 'text', value: image.properties.title});
			}
		});
	};
}

function hasOnlyImages({ children }) {
	return children.every((child) => child.tagName === "img" || whitespace(child));
}