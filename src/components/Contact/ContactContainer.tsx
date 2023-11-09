import { TbMail, TbBrandWhatsapp } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";

function ContactContainer() {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-12 col-md-6">
          <h3 className="mb-4">Visit us...</h3>
          <p className="text-light-emphasis mb-4">
            <SlLocationPin className="mx-3" /> Somewhere Street, No. 12,
            Bucharest, Romania
          </p>
          <div className="map-sm d-block d-lg-none">
            <iframe
              title="contactMap"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2849.3112949794504!2d26.10097977372357!3d44.42677634095328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDI1JzM2LjQiTiAyNsKwMDYnMDguNyJF!5e0!3m2!1sen!2sro!4v1695203142847!5m2!1sen!2sro"
              width={250}
              height={200}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="map-lg d-none d-lg-block">
            <iframe
              title="contactMap"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2849.3112949794504!2d26.10097977372357!3d44.42677634095328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDI1JzM2LjQiTiAyNsKwMDYnMDguNyJF!5e0!3m2!1sen!2sro!4v1695203142847!5m2!1sen!2sro"
              width={400}
              height={300}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="col col-12 col-md-6 mt-4 mt-md-0">
          <h3 className="mb-4">...or write us your question!</h3>
          <p className="text-light-emphasis">
            <TbBrandWhatsapp className="mx-3" /> 0712 345 678
          </p>
          <p className="text-light-emphasis">
            <TbMail className="mx-3" /> contact@atn-bookstore.com
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default ContactContainer;
