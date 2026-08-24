import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />

      <LeftSection
        imageURL="media/images/coil.png"
        productName="Left Section Example 1"
        productDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo vel erat facilisis tincidunt, sed posuere lorem volutpat."
      />

      <RightSection
        imageURL="media/images/coil.png"
        productName="Right Section Example 1"
        productDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo, libero at tincidunt cursus, justo neque volutpat lacus, vitae."
      />

      <LeftSection
        imageURL="media/images/coil.png"
        productName="Left Section Example 2"
        productDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae massa vel augue tincidunt consequat. Donec euismod, lacus at facilisis."
      />

      <RightSection
        imageURL="media/images/coil.png"
        productName="Right Section Example 2"
        productDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Mauris tincidunt, neque vitae consequat interdum, justo sem ullamcorper."
      />

      <Universe />
    </>
  );
}

export default ProductPage;