const Typography = () => {
  return (
    <div>
      {/* //* Typography */}
      <p className="text-2xl">Typography</p>
      <p className="text-sm">Typography</p>
      <p className="text-lg">Typography</p>
      <p className="text-4xl">Typography</p>
      <p className="text-6xl">Typography</p>
      <p className="text-[60px]">Typography</p>

      {/* //* Line Clamp */}
      <article>
        <p className="line-clamp-3">
          2 satır göster gerisi.... Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Accusantium facilis distinctio ab asperiores autem
          maxime nemo fuga explicabo necessitatibus modi quod praesentium
          mollitia minus omnis, nostrum ullam aliquam! Reprehenderit,
          veritatis.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Accusantium facilis distinctio ab asperiores autem maxime nemo fuga
          explicabo necessitatibus modi quod praesentium mollitia minus omnis,
          nostrum ullam aliquam! Reprehenderit, veritatis.
        </p>
      </article>
      <div>
        <p className="font-bold">Merhaba</p>
        <p className="text-center">Merhaba</p>
        <p className="underline">Merhaba</p>
        <p className="uppercase">Merhaba</p>
        <p className="text-red-400">Merhaba</p>
        <p className="text-red-900">Merhaba</p>
        <p className="text-green-700">Merhaba</p>
        <p className="text-[#8DBCC7]">Merhaba</p>
        <p className="text-[rgb(140,209,225)]">Merhaba</p>
        <p className="text-slate-500">Merhaba</p>

        <p className="bg-[rgb(140,209,225)]">Merhaba</p>
        <p className="bg-slate-500">Merhaba</p>
      </div>
    </div>
  );
};

export default Typography;
