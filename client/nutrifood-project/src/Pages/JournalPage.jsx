
import SignUpComp from '../Components/SignUpComp.jsx'
import NavbarPost from '../Components/NavbarPost.jsx';
import JournalComp from '../Components/JournalComp.jsx';
import FooterPost from '../Components/FooterPost.jsx';




function JournalPage() {
  return (
    <>
      <NavbarPost />
      <JournalComp userId={9} />
      <FooterPost />
    </>
  )
}

export default JournalPage