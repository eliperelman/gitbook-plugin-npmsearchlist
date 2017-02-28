# gitbook-plugin-npmsearchlist

Embed an npm search into a GitBook page.

## Install

Add `npmsearchlist` to your `book.json` plugins:

```json
{
  "plugins": ["npmsearchlist"]
}
```

If using the GitBook cli, run `gitbook install`.

If using Yarn, run `yarn add --dev gitbook-plugin-npmsearchlist`.

If using npm, run `npm install --save-dev gitbook-plugin-npmsearchlist`.

## Usage

Insert a GitBook tag into your page with:

```
{% npmsearchlist "QUERY_PARAMETER" %}{% endnpmsearchlist %}
```

Replace `QUERY_PARAMETER` with a search query expression that matches the
[format provided by npms.io](https://api-docs.npms.io/).

For example, to show packages where `sindresorhus` is the author:

```
{% npmsearchlist "author:sindresorhus" %}{% endnpmsearchlist %}
```

To filter by packages that are not deprecated:

```
{% npmsearchlist "author:sindresorhus+not:deprecated" %}{% endnpmsearchlist %}
```
