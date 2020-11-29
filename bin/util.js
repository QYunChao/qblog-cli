const checkGitUrl = (url) => {
  return url && url.length >= 0 && url.startsWith("https://github.com/");
};

const parseGitUrl = (
  newUrl,
  oldUrl = "https://github.com/qyunchao/vuepress-blog"
) => {
  let newArr = newUrl.split("/");
  let oldArr = oldUrl.split("/");
  return {
    newStr: [newArr[3], newArr[4]],
    oldStr: [oldArr[3], oldArr[4]],
  };
};

exports.checkGitUrl = checkGitUrl;
exports.parseGitUrl = parseGitUrl;
