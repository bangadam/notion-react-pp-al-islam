import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '276303b87e574408a30394d9d34cef8f',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Pondok Pesantren Al-Islam',
  domain: '',
  author: 'bangadam.dev',

  // open graph metadata (optional)
  description: 'Website Pondok Pesantren Al-Islam',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  // github: 'transitive-bullshit',
  // linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  youtube: 'UClGiwb0St_dDLQwDiiqwkAQ', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`
  instagram: 'alislammalang', // optional instagram username

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: '',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/profile': '2c6ae099e18b48da94f4ee19c4018960',
  //   '/informasi-pendaftaran': 'd5820749f8f94643a2707349c2077eb1'
  // },
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Profile',
      pageId: '2c6ae099e18b48da94f4ee19c4018960'
    },
    {
      title: 'Pendaftaran',
      pageId: 'd5820749f8f94643a2707349c2077eb1'
    }
  ]
})
