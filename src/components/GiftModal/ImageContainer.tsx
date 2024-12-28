
import imgUrl from '/src/images/le-seigneur-des-anneaux-coupe-papier-anduril-epee-aragorn-ouvre-lettre-presentoir.jpg';
export function ImageContainer() {
  return (
    <div className="w-full h-full aspect-video rounded-lg overflow-hidden mb-4">
      <img
        src={imgUrl}
        alt="Gift box"
        className="w-full h-full "
      />
    </div>
  );
}