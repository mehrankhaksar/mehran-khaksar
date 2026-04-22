import { Badge } from "../ui/badge";

export default function TechnologyList({ technologies = [] }) {
  if (!technologies.length) return null;

  return (
    <ul className="max-w-xs flex flex-wrap gap-1.5">
      {technologies.map((technology) => (
        <li key={technology}>
          <Badge variant="secondary">{technology}</Badge>
        </li>
      ))}
    </ul>
  );
}
