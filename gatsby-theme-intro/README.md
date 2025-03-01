[![Version](https://img.shields.io/npm/v/@arene/gatsby-theme-intro)](https://www.npmjs.com/package/@arene/gatsby-theme-intro)
[![Downloads](https://img.shields.io/npm/dt/@arene/gatsby-theme-intro)](https://www.npmjs.com/package/@arene/gatsby-theme-intro)
![License](https://img.shields.io/npm/l/@arene/gatsby-theme-intro)

# Intro - Personal branding theme for developers

Intro is an open source [Gatsby](https://www.gatsbyjs.org/) theme built specially for developers.

Tell your story by showing your skills, projects and career path.

## Preview

[![Intro Theme](https://github.com/wkocjan/gatsby-theme-intro/blob/master/intro.png?raw=true)](https://www.youtube.com/watch?v=03rKddYHazo)

### Live Demo

Live demo is available at:
https://weeby.studio/intro/preview

## Features

- Show your skills, tools, projects & career path
- 10 predefined color versions
- YAML files as a data source
- Contact form integrated with [Formspree](https://formspree.io/)
- Uses utility-first [TailwindCSS](https://tailwindcss.com/) framework
- Responsive design (desktop / mobile)

## 🚀 Getting Started

### Install theme & dependencies

```shell
mkdir my-site
cd my-site
yarn init -2
yarn add gatsby react react-dom @arene/gatsby-theme-intro
```

### Enable theme

Then add the theme to your `gatsby-config.js`.

```javascript
module.exports = {
  plugins: [
    {
      resolve: "@arene/gatsby-theme-intro",
      options: {
        theme: "classic",
        darktheme: "dark-blue",
      },
    },
  ],
}
```

### Run your site

That's it, you can now run your site using

```shell
gatsby develop
```

This process will create `content/` directory within your site with a sample data.

### Edit content

You can change the website's content by editing `.yaml` files in `content/` directory:

#### `profile.yaml`

Follow existing convention to provide your profile information, skills & tools.

Do not remove existing parameters from the file, as it may break the website.

#### `projects.yaml`

For each project you can provide:

| Parameter   | Value                          | Is required? |
| ----------- | ------------------------------ | ------------ |
| name        | Name of the project            | yes          |
| url         | URL of the project             | no           |
| description | Project's description          | no           |
| status      | Either `in progress` or `live` | no           |
| tags        | List of tags                   | no           |
| icon        | Either `github` or `website`   | no           |
| image       | Path to the image              | no           |

#### `work-history.yaml`

For each entry you can provide:

| Parameter | Value                        | Is required? |
| --------- | ---------------------------- | ------------ |
| company   | Name of the company          | yes          |
| period    | Start / End date             | no           |
| position  | Your position at the company | no           |
| url       | URL of the company           | no           |

#### `social.yaml`

List of your social media accounts. Please just fill the url parameter or leave it empty.

Do not add custom items to the list.

### Enable email notifications

Contact form is integrated with [Formspree](https://formspree.io/). To enable form submissions to your e-mail, please sign up for a Formspree account and create a new form in your dashboard.

Once you do it, you'll get your unique endpoint - please add it to `gatsby-config.js`, within a `siteMetadata` object.

## Configuration

Here is the list of configuration options you can set in `gatsby-config.js`:

```javascript
module.exports = {
  siteMetadata: {
    description: "Personal page of John Doe",
    title: "John Doe",
    formspreeEndpoint: "https://formspree.io/f/{your-id}",
  },
  plugins: [
    {
      resolve: "@arene/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: true,
        theme: "classic",
        darktheme: "dark-blue",
        lang: null,
        tailwindConfig: null
      },
    },
  ],
}
```

After modyfying `gatsby-config.js` it may be required to restart `gatsby develop` process.

- The `siteMetadata` section is responsible for SEO settings.
- By modifying `basePath` parameter you can run the website on different URL (e.g. `https://mydomain.com/profile`). It may be useful when integrating with existing Gatsby site.
- By setting `showThemeLogo` to `false` you can hide the Intro logo in the footer area.
- If provided, the value of `lang` is added to the `<body>` element.
- Change the `theme` parameter to load different color variant. Please refer to the list below for available values.
- `darktheme` is an alternative theme, defined in the same way as `theme`. It is activited using Tailwind CSS's [dark mode machinery](https://tailwindcss.com/docs/dark-mode).
- If provided, `tailwindConfig` should be an object. Any field it provides will completely overwrite the correspond field in `gatsy-theme-intro`'s default Tailwind configuration.

### Available color variants

| Name                | Preview                                                           |
| ------------------- | ----------------------------------------------------------------- |
| `blue`              | [click here](https://weeby.studio/intro/themes/blue.jpg)          |
| `bright-green`      | [click here](https://weeby.studio/intro/themes/bright-green.jpg)  |
| `bright-orange`     | [click here](https://weeby.studio/intro/themes/bright-orange.jpg) |
| `bright-red`        | [click here](https://weeby.studio/intro/themes/bright-red.jpg)    |
| `classic` (default) | [click here](https://weeby.studio/intro/themes/classic.jpg)       |
| `dark-blue`         | [click here](https://weeby.studio/intro/themes/dark-blue.jpg)     |
| `dark-green`        | [click here](https://weeby.studio/intro/themes/dark-green.jpg)    |
| `dark-pink`         | [click here](https://weeby.studio/intro/themes/dark-pink.jpg)     |
| `gh-inspired`       | [click here](https://weeby.studio/intro/themes/gh-inspired.jpg)   |
| `warm-red`          | [click here](https://weeby.studio/intro/themes/warm-red.jpg)      |

### Dark mode

By default, TailwindCSS uses its `"media"` mode for activating dark mode, which on modern OSes should toggle dark mode automatically according to OS preference. To [toggle dark mode manually](https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually), add the following to your configuration:

```javascript
  ...
  plugins: [
    {
      resolve: "@arene/gatsby-theme-intro",
      options: {
        ...
        tailwindConfig: {
          darkMode: "class",
          content: ...
          ...
        }
      }
    }
  ]
```

Then add the necessary UI to add/remove the `"dark"` class to the `<html>` element. Remember to update the `content` field so that the files used to define this UI are [scanned](https://tailwindcss.com/docs/content-configuration) by Tailwind CSS.

## Customization

### Component shadowing

You can use Gatsby component shadowing technique to customize the theme.

- All components are located in `src/components` directory.
- All parameters accepted by components are defined using [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html). You can find types definitions in one centeral `src/types` location.
- Code you want to overwrite should be placed within `src/@arene/gatsby-theme-intro/` directory.
- *Important* In order to use TailwindCSS classes in your new files, they must be be listed in the the `content` field of `tailwindConfig`, as in the [example above](#dark-mode).

Please refer to [the official documentation](https://www.gatsbyjs.org/docs/themes/shadowing/) to learn more.


### Custom color variant

As `theme` parameter in theme configuration (`gatsby-config.js`) you can pass either the name of the existing theme or an object of colors.

Example:

```javascript
module.exports = {
  (...)
  plugins: [
    {
      resolve: "@arene/gatsby-theme-intro",
      options: {
        (...)
        theme: {
          'back': '#edf0f3',
          'front': '#2b3137',
          'lead': '#2781ed',
          'lead-text': '#ffffff',
          'line': '#ced9e3',
          'skill-1': '#405060',
          'skill-2': '#fc8732',
          'skill-3': '#2ebc50',
        },
      },
    },
  ],
  (...)
}
```

Please remember, that after modyfying `gatsby-config.js` file it may be required to restart `gatsby develop` process.

## Updating dependencies

- Running `yarn upgrade-interactive` will check for any out-of-data packages, and propose to update them. It automatically updates the version ranges in `package.json` files.


## Changelog

### 3.0.0

The theme is now compatible with Gatsby v3, TailwindCSS v3 and yarn v2+.

### 2.0.0

The theme is now compatible with Gatsby v3 and TailwindCSS v2.

### 1.1.0

The version introduces required changes to make the contact form work after [latest changes](https://help.formspree.io/hc/en-us/articles/360056076314-Phasing-out-legacy-forms-email-URLs-) from Formspree.

To upgrade, please add `formspreeEndpoint` property to `siteMetadata` object in your `gatsby-config.js`. For more information about configuring Formspree, please refer to the documentation above.

## About

Intro. is a theme created by [Wojciech Kocjan](https://kocjan.net) from [Weeby Studio](https://weeby.studio).

The theme has been initially [launched](https://www.producthunt.com/posts/intro-8) in 2018 as a commercial project written in JavaScript. In 2020 it's been rewritten to Gatsby and open sourced.

**Thank you for using it!**
