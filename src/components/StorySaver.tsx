import { Container } from "./Container";
import { Card } from "./Card";

export const StorySaver = () => {
  return (
    <section className="bg-[#EEF1F7]">
      <Container className="flex flex-col gap-10 pt-16 pb-28">
        <div className="flex flex-col items-center justify-center gap-10 pb-12">
          <h1 className="text-[2.5rem] font-roboto-900 max-sm:text-3xl max-[450px]:text-xl">
            Let your story live
            <strong className="bg-yellow-300"> more than 24h.</strong>
          </h1>
          <p className="max-w-3xl text-center text-xl max-md:text-lg max-md:max-w-[38rem]  max-sm:max-w-sm  max-[360px]:max-w-xs">
            You've worked hard to create a beautiful Instagram story but it
            disappears in 24 hours? No worries, use our story saver for
            Instagram to bring them to life on your website.
          </p>
        </div>

        <Card />
      </Container>
    </section>
  );
};
