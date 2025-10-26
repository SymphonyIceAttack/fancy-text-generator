"use client";
interface Props {
  className: string;
}
export default function FontItem(props: Props) {
  return (
    <div key={props.className} className="flex items-center justify-center">
      <span className={`${props.className} text-3xl`}>{props.className}</span>
      <button
        type="button"
        onClick={() => {
          const el = document.querySelector(`div  span.${props.className}`);
          el !== null ? navigator.clipboard.writeText(el.textContent) : null;
        }}
      >
        copy
      </button>
    </div>
  );
}
