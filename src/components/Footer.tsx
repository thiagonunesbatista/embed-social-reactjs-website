import { Container } from "./Container";

export const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white w-full ">
      <Container className="h-full pb-10">
        <div className="grid grid-cols-12 gap-3 pt-10 justify-items-center max-md:grid-cols-4 max-md:justify-items-start max-md:pl-7 max-md:gap-10 lg:px-7 max-lg:px-7">
          <div className="flex flex-col gap-6 col-span-4">
            <div className="flex items-center gap-2">
              <img src="/src/assets/branding/logo-white.svg" />
              <h1>embedsocial</h1>
            </div>

            <p className="max-w-md max-xl:max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
              rhoncus suspendisse mattis ultricies adipiscing quam pretium
              eleifend.
            </p>
          </div>

          <div className="flex flex-col gap-4 col-span-2">
            <h1 className="font-roboto-900 text-lg mb-3">Product</h1>
            <a href="#">Reviews management</a>
            <a href="#">Embed Instagram stories</a>
            <a href="#">Display Instagram feeds</a>
            <a href="#">Collect reviews</a>
            <a href="#">Send email requests</a>
          </div>

          <div className="flex flex-col gap-4 col-span-2">
            <h1 className="font-roboto-900 text-lg mb-3">Company</h1>
            <a href="#">About EmbedSocial</a>
            <a href="#">Brand Guidelines</a>
            <a href="#">Press Kit</a>
            <a href="#">Support</a>
          </div>

          <div className="flex flex-col gap-3 col-span-2">
            <h1 className="font-roboto-900 text-lg mb-3">Integrations</h1>
            <a href="#">WordPress</a>
            <a href="#">Shopify</a>
            <a href="#">Magento</a>
            <a href="#">Squarespace</a>
            <a href="#">Intercom</a>
            <a href="#">Slack</a>
          </div>

          <div className="flex flex-col gap-3 col-span-2">
            <h1 className="font-roboto-900 text-lg mb-3">Integrations</h1>
            <a href="#">WordPress</a>
            <a href="#">Shopify</a>
            <a href="#">Magento</a>
            <a href="#">Squarespace</a>
            <a href="#">Intercom</a>
            <a href="#">Slack</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
