module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  blogAuthorDir: "contributors", // The name of directory that contains your 'authors' folder.
  blogAuthorId: "genesis", // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "The BuidlGuidl Kingdom", // Site title.
  siteTitleAlt: "The BuidlGuidl Kingdom", // Alternative site title for SEO.
  siteLogo:
    "https://haysclark.github.io/gatsby-starter-casper/logos/logo-1024.png", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: "http://buidlguidl.github.io/", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription:
    "Buidl the change that you wish to see in the world.", // Website description used for RSS feeds/meta description tag.
  siteCover: "images/ethereumMountains.jpg", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "Genesis", // The author name used in the RSS file
  sitePaginationLimit: 10, // The max number of posts per page.
  siteSocialUrls: [
    "https://github.com/buidlguidl",
  ],
  // siteFBAppID: "1825356251115265",
  // googleAnalyticsID: "UA-111982167-1", 
  // disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter",
  postDefaultCategoryID: "Technology", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/buidlguidl",
      iconClassName: "fa fa-github" // Disabled, see Navigation.jsx
    },
    {
      label: "Twitter",
      url: "https://twitter.com/buidlguidl",
      iconClassName: "fa fa-twitter" // Disabled, see Navigation.jsx
    },
    {
      label: "Email",
      url: "mailto:info@buidlguidl.com",
      iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx
    }
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "Buidl The Change" // Label used before the year
    // year: "2018" // optional, set specific copyright year or range of years, defaults to current year
    // url: "https://www.gatsbyjs.org/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  promoteGatsby: true // Enables the GatsbyJS promotion information in footer.
};
