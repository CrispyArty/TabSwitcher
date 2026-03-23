# TabSwitcher

For Ctrl+Tab overwrite
https://superuser.com/questions/104917/chrome-tab-ordering/1326712#1326712

```javascript
document.body.onclick = function(e) {
  gCT = !window.gCT;
  const p = e.composedPath(), cn = p[0].textContent,
    s = p.filter(p => p.className == "shortcut-card")[0],
    n = s?.children[0].children[1].textContent;
  if (n) chrome.management.getAll(es => {
    const ext = es.filter(e => e.name == n)[0], {id} = ext;
    chrome.developerPrivate.getExtensionInfo(id, i => {
      const c = i.commands.filter(c => c.description == cn)[0];
      if (c) chrome.developerPrivate.updateExtensionCommand({
        extensionId: id,
        commandName: c.name,
        keybinding: `Ctrl+${gCT ? "" : "Shift+"}Tab`
      });
    });
  });
}
```
