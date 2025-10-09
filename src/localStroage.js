export const handleInstall = (AppData) => {
  let existingListRaw = localStorage.getItem("installList");
  let existingList = [];
  const parsed = JSON.parse(existingListRaw);
  if (Array.isArray(parsed)) {
    existingList = parsed;
  }
  const isAlreadyInstalled = existingList.some((app) => app.id === AppData.id);
  if (!isAlreadyInstalled) {
    const updatedList = [...existingList, AppData];
    localStorage.setItem("installList", JSON.stringify(updatedList));
  }
};
