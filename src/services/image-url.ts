const getCroppedImageUrl = (url: string) => {
  const placeholder =
    "https://placeholdit.com/600x400/dddddd/999999?text=No+image+available&font=roboto&font_size=26";
  if (!url) return placeholder;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
