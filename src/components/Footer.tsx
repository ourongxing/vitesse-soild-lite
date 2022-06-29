import { useDark } from "~/hooks"

export default function Footer() {
  const { isDark, toggleDark } = useDark()
  return (
    <nav class="text-xl mt-6 inline-flex gap-2">
      <button class="icon-btn !outline-none" onClick={() => toggleDark()}>
        <div class={isDark() ? "i-carbon-moon" : "i-carbon-sun"}></div>
      </button>

      <a
        class="icon-btn i-carbon-logo-github"
        rel="noreferrer"
        href="https://github.com/ourongxing/vitesse-react-lite"
        target="_blank"
        title="GitHub"
      />
    </nav>
  )
}
