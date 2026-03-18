window.CONFIG = {
  macros: [
    { category: 'Education', name: 'Classroom', icon: 'classroom', triggers: ['c', 'class', 'classroom'], url: 'https://google.com', normalisedURL: '://google.com', bgColor: { type: 'solid', color: '#1a73e8' }, textColor: '#fff', pinned: true },
    { category: 'Education', name: 'Wikipedia', icon: 'wikipedia', triggers: ['w', 'wiki', 'wikipedia'], url: 'https://wikipedia.org', normalisedURL: 'wikipedia.org', commands: { search: { template: '{@}/?search={$}' }, go: { template: '{@}/wiki/{$}' } }, bgColor: { type: 'gradient', gradientType: 'linear', colors: ['#e1e1e3', '#bbb'], stops: [0, 100] }, textColor: '#000', pinned: true },
    { category: 'Entertainment', name: 'Youtube', triggers: ['y', 'yt', 'youtube'], key: 'KeyY', icon: 'youtube', url: 'https://youtube.com', normalisedURL: 'youtube.com', commands: { go: { template: 'https://youtu.be{$}', description: 'gotovideo' }, search: { template: '{@}/results?search_query={$}' } }, bgColor: { type: 'solid', color: '#f30002' }, textColor: '#212121', pinned: true },
    { category: 'Programming', name: 'GitHub', icon: 'github', url: 'https://github.com', normalisedURL: 'github.com', triggers: ['g', 'git', 'github'], key: 'KeyG', commands: { go: { template: '{@}/{$}', description: 'gotouser' }, search: { template: '{@}/search?q={$}' } }, bgColor: { type: 'solid', color: '#171515' }, textColor: '#e8e8e8', pinned: true },
    { category: 'Programming', name: 'StackOverflow', icon: 'stackoverflow', url: 'https://stackoverflow.com', normalisedURL: 'stackoverflow.com', triggers: ['s', 'st', 'so', 'stack', 'stackoverflow'], key: 'KeyS', commands: { search: { template: '{@}/search?q={$}' }, go: { template: '{@}/questions/{$}', description: 'gotoquestion' } }, bgColor: { type: 'gradient', gradientType: 'linear', colors: ['#e87922', '#ffbe25'], stops: [0, 100] }, textColor: '#212121', pinned: true },
    { category: 'Other', name: 'Translate', icon: 'translate', url: 'https://google.com', normalisedURL: '://google.com', triggers: ['t', 'translate'], key: 'KeyT', commands: { search: { template: '{@}/?text={$}', description: 'translatetext' } }, bgColor: { type: 'gradient', gradientType: 'linear', angle: 45, colors: ['#508bed', '#4654b4'] }, textColor: '#fff', pinned: true },
    { category: 'Music', name: 'Spotify', icon: 'spotify', url: 'https://spotify.com', normalisedURL: 'spotify.com', triggers: ['music', 'sp', 'sfy', 'spo', 'spotify'], commands: { search: { template: '{@}/search/{$}' }, go: { template: '{@}/track/{$}', description: 'gototrack' } }, bgColor: { type: 'solid', color: '#1ccc5b' }, textColor: '#000', pinned: true }
  ],
  commands: [
    { type: 'search', trigger: '?' },
    { type: 'go', trigger: '/' }
  ],
  engines: {
    google: { name: 'Google', bgColor: { type: 'solid', color: '#aaa' }, textColor: '#fff', types: { query: { template: 'https://google.com{$}' }, calculator: { template: 'https://google.com{@}' }, currency: { template: 'https://google.com{@}' } } },
    duckDuckGo: { name: 'DuckDuckGo', bgColor: { type: 'solid', color: '#e37151' }, textColor: '#e8e8e8', types: { query: { template: 'https://duckduckgo.com{$}' }, calculator: { template: 'https://duckduckgo.com{@}' }, currency: { template: 'https://duckduckgo.com{@}' } } },
    bing: { name: 'Bing', bgColor: { type: 'gradient', gradientType: 'linear', colors: ['#3ab0f1', '#2351dd', '#40d1da'] }, textColor: '#e8e8e8', types: { query: { template: 'https://bing.com{$}' }, calculator: { template: 'https://bing.com{@}' }, currency: { template: 'https://bing.com{@}' } } },
    brave: { name: 'Brave', bgColor: { type: 'gradient', gradientType: 'linear', colors: ['#FB542B', '#343546'] }, textColor: '#e8e8e8', types: { query: { template: 'https://brave.com{$}' }, calculator: { template: 'https://brave.com{@}' }, currency: { template: 'https://brave.com{@}' } } }
  }
};
