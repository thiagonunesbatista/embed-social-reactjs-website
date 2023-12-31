import { Container } from "./Container";
import { CustomersCards } from "./CustomersCards";

export const CustomersReview = () => {
  return (
    <section>
      <Container className="flex flex-col items-center justify-center gap-16 h-full py-28 px-1">
        <div className="text-center flex flex-col justify-center items-center gap-2">
          <h1 className="text-5xl font-roboto-900 max-sm:text-4xl">
            Our customers love EmbedStories
          </h1>
          <p className="text-lg max-sm:text-base max-sm:max-w-xs">
            <strong>Rated 4.8</strong> by our customers on Facebook and Google
          </p>
        </div>
        <CustomersCards />
        <p className="flex gap-2 items-start text-[#9CA0AC]">
          Widget powered <img src="/src/assets/reviews/Logo.svg" /> by
          EmbedSocial
        </p>
      </Container>
    </section>
  );
};
