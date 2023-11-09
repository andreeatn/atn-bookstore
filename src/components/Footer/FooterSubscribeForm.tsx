import { useRef, useState } from "react";

function FooterSubscribeForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <div className="row newsletter my-4 mb-md-0 ">
        <div className="col-12 col-lg-9 col-xl-7">
          <h5 className="mb-1">Subscribe to our newsletter</h5>
          <p className="mb-1">Monthly promotions and latest book releases</p>
          <form onSubmit={(event) => handleSubmit(event)}>
            <div className="d-flex flex-row">
              <label className="visually-hidden">Email address</label>
              <input
                ref={emailRef}
                id="newsletter"
                type="email"
                className="form-control py-1"
                placeholder="Email address"
                onChange={() => setIsSubmitted(false)}
              />
              <button className="btn btn-sm btn-dark mx-2" type="submit">
                Subscribe
              </button>
            </div>
          </form>
        </div>
        {isSubmitted && (
          <div className="col col-12">
            <p className="mt-2 text-success fw-bold">
              Address {emailRef.current?.value} is now subscribed to the
              newsletter!
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default FooterSubscribeForm;
