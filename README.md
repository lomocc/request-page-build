# Request Page Build

Manually triggering gh-pages build

## Usage:

### most cases

```yaml
- name: Request Page Build
  uses: lomocc/request-page-build@master
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### particular cases

```yaml
- name: Request Page Build
  uses: lomocc/request-page-build@master
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
  with:
    owner: owner # optional, default: current context owner
    repo: repo # optional, default: current context repo
```
