module.exports = [
    '',
    {
      title: 'General',
      path: '/general/octopus-overview',
      collapsable: false,
      children: [
        '/general/octopus-overview',
        '/general/infrastructure',
        '/general/octopus-staking',
        '/general/octopus-faq',
      ]
    },        
    {
      title: 'Validator Guides',
      path: '/maintain/validator-guide',
      collapsable: false,
      children: [
        '/maintain/validator-generate-keys',
        '/maintain/validator-deploy',
        '/maintain/validator-register',
        '/maintain/monitor-node',
        '/maintain/node-instance-operations',
      ]
    },
    {
      title: 'Delegator Guides',
      path: '/maintain/delegator-delegate',
      collapsable: false,
      children: [
        '/maintain/delegator-delegate',
        '/maintain/delegator-operations',
      ]
    },    
    {
      title: 'Developer Guides',
      path: '/guides/appchain-guide',
      collapsable: false,
      children: [
        '/guides/appchain-develop',
        '/guides/appchain-evm',
        '/guides/appchain-register',
        '/guides/appchain-startup',
        '/guides/appchain-upgrade',
        '/guides/appchain-indexer',
        '/guides/assets-cross-chain',              
      ]
    },
    {
      title: 'User Guides',
      path: '/guides/voting-appchain',
      collapsable: false,
      children: [
        '/guides/voting-appchain',
      ]
    }
];