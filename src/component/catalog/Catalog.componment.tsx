import { ref } from "firebase/storage";
import "./Catalog.style.scss";
import Badge from "../badge/badge.component";

interface Heading {
  level: string;
  text: string;
  id: string;
}

const convertHeadingToJson = (ref: HTMLDivElement | null): Heading[] => {
  if (!ref) return [] as Heading[];
  const headings = ref.querySelectorAll("h2, h3, h4, h5, h6");
  const headingList: Heading[] = [];
  headings.forEach((heading) => {
    const id = heading.id;
    const level = heading.tagName;
    const text = heading.textContent!;
    headingList.push({ level, text, id });
  });

  return headingList;
};
interface Props {
  articleRef: React.MutableRefObject<HTMLDivElement | null>;
}
export default function Catalog({ articleRef }: Props) {
  return (
    <div className='Catalog'>
      <div className='catalog-title'>Catalog</div>
      <div className='catalog-content'>
        {convertHeadingToJson(articleRef.current).map((heading, i) => (
          <a
            href={window.location.href.split("#")[0] + "#" + heading.id}
            className={"level-" + heading.level}
            key={i}>
            <div className='catalog-item'>
              <Badge hover color={"main"}>
                {heading.text}
              </Badge>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
