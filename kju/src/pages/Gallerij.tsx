import { CardHorizontalImage } from "../components/Card";
import empty from "../assets/empty.jpg";
import { border_color_accent, lorem } from "../pages/Layout";

function Gallerij() {
  return (
    <>
      <div className="flex flex-col items-center py-8">
        <p className="text-4xl font-bold pb-4">Gallerij</p>
        <hr className={`border-b-2 ${border_color_accent} w-55 mb-6`} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CardHorizontalImage
            img_path={empty}
            title="Title"
            github_path="https://github.com"
            body={lorem}
            tags={["tag1", "tag2"]}
          />
          <CardHorizontalImage
            img_path={empty}
            title="Title"
            github_path="https://github.com"
            body={lorem}
            tags={["tag1", "tag2"]}
          />
          <CardHorizontalImage
            img_path={empty}
            title="Title"
            github_path="https://github.com"
            body={lorem}
            tags={["tag1", "tag2"]}
          />
          <CardHorizontalImage
            img_path={empty}
            title="Title"
            github_path="https://github.com"
            body={lorem}
            tags={["tag1", "tag2"]}
          />
        </div>
      </div>
    </>
  );
}

export default Gallerij;
