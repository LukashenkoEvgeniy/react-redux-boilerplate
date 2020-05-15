export default function srcSet(photo) {
  return photo && `${photo[400]} 400w, ${photo[400]} 800w,
      ${photo[400]} 1300w, ${photo[800]} 1900w, ${photo[3600]} 3600w`;
}
