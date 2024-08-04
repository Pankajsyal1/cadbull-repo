import MainLayout from "@/layouts/MainLayout";

const TermsPrivacyFaq = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <img src="https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg?w=996&t=st=1689992075~exp=1689992675~hmac=d498ed8f133f12b3b6905ffbbdd7427865feecb214c682a44a27a208f09d1695" className="w-100 rounded-2 mb-3 mb-md-4 object-fit-cover" alt="cover" height={350} />
            <div>
              <h1>Terms Privacy FAQ</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet numquam maxime autem. Blanditiis quis aliquam, fugit repudiandae quaerat repellendus quo culpa? Quasi cumque amet, voluptatem in aspernatur nostrum voluptas. Quas!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

TermsPrivacyFaq.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}


export default TermsPrivacyFaq;