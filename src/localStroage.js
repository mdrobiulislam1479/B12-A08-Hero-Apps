export const handleInstall = (AppData) => {
  const existingList = JSON.parse(localStorage.getItem("installList")) || [];
  const isAlreadyInstalled = existingList.some((app) => app.id === AppData.id);
  if (!isAlreadyInstalled) {
    existingList.push(AppData);
    localStorage.setItem("installList", JSON.stringify(existingList));
  }
};

export const isAppInstalled = (id) => {
  const installedApps = JSON.parse(localStorage.getItem("installList")) || [];
  return installedApps.some((app) => app.id === Number(id));
};
