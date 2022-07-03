export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62c192fc6049b90f06ddabdb',
                  title: 'Sanity Studio',
                  name: 'nuwa-sanity-studio',
                  apiId: '8be35f12-9f2b-49dc-88ba-8e6cc66d658a'
                },
                {
                  buildHookId: '62c192fc2da6090e5716bf6c',
                  title: 'Landing pages Website',
                  name: 'nuwa-sanity',
                  apiId: '895943ee-fc14-4031-9079-70218492a8f5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/eds2002/nuwa-sanity',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://nuwa-sanity.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
