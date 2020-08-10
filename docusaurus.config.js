module.exports = {
  title: 'Palm Oil',
  tagline: 'Anything you want to know about palm oil',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/palmIcon.svg',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Palm Oil',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          // to: 'docs/about/history',
          activeBasePath: 'docs',
          label: 'General Info',
          position: 'left',
          items: [
            {
              label: 'History',
              to: 'docs/about/history',
            },{
              label: 'Part of Palm Oil',
              to: 'docs/about/component/part',
            },{
              label: 'Varietas',
              to: 'docs/about/varietas',
            },          
          ],
        }, {          
          label: 'Others', 
          position: 'left',
          items: [
            {
              label: 'Oil Palm Seedlings',
              to: 'docs/seedlings',
            },{
              label: 'Oil Palm Cultivation',
              to: 'docs/cultivation',
            },{
              label: 'Oil Palm Processing',
              to: 'docs/processing', 
            },          
          ],

        },{
          to: 'blog', 
          label: 'Blog', 
          position: 'left'
        }, {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'History',
              to: 'docs/about/history',
            },  
            {
              label: 'Others',
              to: 'docs/seedlings',
            },            
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'docs/about/history',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },       
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    require.resolve('docusaurus-lunr-search'),
  ],
};
