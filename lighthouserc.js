module.exports = {
    ci: {
      collect: {
        /* Add configuration here */
        "numberOfRuns": 2,
        staticDistDir: './_site',
      },
      assert: {
        assertions: {
          'categories:performance': ['warn', {minScore: 0.3}],
          'categories:accessibility': ['error', {minScore: 0.9}]
        }
      },
      upload: {
        /* Add configuration here */
        //target: 'lhci',
        //serverBaseUrl: 'https://peaceful-earth-32428.herokuapp.com/',
        //token: 'LHCI_TOKEN', // could also use LHCI_TOKEN variable instead
        //target: 'filesystem',
        //outputDir:'./lhci'
        target: 'temporary-public-storage',
      },
    },
  };