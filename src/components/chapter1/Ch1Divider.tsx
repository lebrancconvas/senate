import { component$ } from "@builder.io/qwik";

interface Ch1DividerProps {
  text: string;
}

const Ch1Divider = component$<Ch1DividerProps>(({ text }) => {
  return (
    <div class="container my-10 flex items-center gap-10 p-10">
      <div class="flex-1 border-b border-dashed" />
      <span class="wv-h6 font-kondolar font-black">{text}</span>
      <div class="flex-1 border-b border-dashed" />
    </div>
  );
});

export default Ch1Divider;
