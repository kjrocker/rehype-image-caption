export default [
	{
		title: "image with alt text as plaintext",
		input: `![Alt](http://example.com/test.png)`
	},
	{
		title: "image with alt text and caption",
		input: `![Image](http://example.com/test.png "Caption")`,
	},
	{
		title: "image with alt text, caption, and paragraph",
		input: `![Image](http://example.com/test.png "Caption")Text`
	},
	{
		title: "image with no alt text",
		input: `![](http://example.com/test.png)`
	},
	{
		title: "raw image markup with caption",
		input: `<figure><img src="http://example.com/captioned.png" alt="Captioned image"><figcaption><em>Captioned image</em></figcaption></figure>`
	},
	{
		title: "raw image markup without caption",
		input: `<img src="http://example.com/captioned.png" alt="Captioned image">`
	},
	{
		title: "link with image",
		input: `[![Image](http://example.com/test.png)](http://example.com)`
	},
	{
		title: "paragraph with only images",
		input: `\n\n![Image 1](http://example.com/test1.png)\n![Image 2](http://example.com/test2.png)\n\n`
	},
	{
		title: "paragraph with no images",
		input: `A paragraph bereft of images`
	},
];
