export default function Index() {
  const [name, setName] = createSignal("")

  const navigate = useNavigate()
  const go = () => {
    name() && navigate(`/hi/${encodeURIComponent(name())}`)
  }

  return (
    <div>
      <div class="i-carbon-campsite text-4xl inline-block" />
      <p>
        <a
          rel="noreferrer"
          href="https://github.com/antfu/vitesse-lite"
          target="_blank"
        >
          Vitesse Lite for React
        </a>
      </p>
      <p>
        <em class="text-sm op75">Opinionated Vite Starter Template</em>
      </p>

      <div class="py-4" />

      <input
        placeholder="What's your name?"
        type="text"
        class="px-4 py-2 w-250px text-center bg-transparent outline-none active:outline-none border-(~ rounded gray-200) dark:border-gray-700"
        onKeyDown={({ key }) => key === "Enter" && go()}
        onChange={({ currentTarget }) => setName(currentTarget.value)}
      />

      <div>
        <button class="m-3 text-sm btn" disabled={!name()} onClick={() => go()}>
          Go
        </button>
      </div>
    </div>
  )
}
