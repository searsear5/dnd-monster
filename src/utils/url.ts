  // /api/images/monsters/aboleth.png -> detail
  // /api/monsters/aboleth

  // ['', 'api', 'monsters', 'young-copper-dragon']

export function extractImageFromUrl(url: string) {
    const urlList = url.split("/");
    console.log("urlList",urlList)
    return urlList[1] + "/images/" + urlList.slice(2).join("/") + ".png";
}
