import ContactsItem from "../ContactsItem/ContactsItem";
import { AnimatePresence, motion } from "framer-motion";
function ContactsList({ contacts, onDelete }) {
  return (
    <div>
      <AnimatePresence initial={false}>
        {contacts.length !== 0 && (
          <motion.ul
            initial={{
              scaleY: -1,
            }}
            animate={{
              scaleY: 1,
            }}
            exit={{
              scaleY: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            style={{
              transformOrigin: "top",
            }}
          >
            <AnimatePresence>
            {contacts.map((contact) => (
              <ContactsItem
                onDelete={onDelete}
                key={contact.id}
                id={contact.id}
                name={contact.name}
                number={contact.number}
                org={contact.org}
                email={contact.email}
              />
            ))}
            </AnimatePresence>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
export default ContactsList;
