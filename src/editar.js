export default function editChapter(items, name, chapter, midlink = '') {
  name = name.toUpperCase();
  for (let i = 0; i < items.length; i++) {
    if (items[i].name.toUpperCase() === name) {
      items[i].chapter = chapter;
      if (midlink != '') {
        items[i].midlink = midlink;
      }
      else {
        items[i].midlink = chapter;
      }
      break;
    }
  }
}
