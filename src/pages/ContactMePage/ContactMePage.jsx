import { Link } from 'react-router-dom';
import WhatsAppIcon from '../../vectors/WhatsAppIcon';
import Styles from './ContactMePage.module.css';
import InstagramIcon from '../../vectors/InstagramIcon';
import { FacebookIcon } from '../../vectors/FacebookIcon';
import GmailIcon from '../../vectors/GmailIcon';
import LinkedinIcon from '../../vectors/LinkedinIcon';

export default function ContactMePage() {

  const iconsSize = {
    width: '90%',
    height: '90%'
  }

  const socialNetworks = [
    {
      name: 'WhatsApp',
      href: 'https://wa.me/584241622223',
      icon: <WhatsAppIcon className='' size={iconsSize}/>,
      description: '(fast answer by me)',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/joseantonio_19_/?next=%2F',
      icon: <InstagramIcon className={''} size={iconsSize}/>,
      description: '(It might take a time)',
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/jose.antonio.almonteE',
      icon: <FacebookIcon className={''} size={iconsSize}/>,
      description: '(I don´t use it. please, no)',
    },
    {
      name: 'Gmail',
      href: 'mailto:joseyv5@gmail.com',
      icon: <GmailIcon className={''} size={iconsSize}/>,
      description: '(Used a litle more than Facebook)',
    },
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/jose-antonio-almonte-1a32b528a/',
      icon: <LinkedinIcon className={''} size={iconsSize}/>,
      description: 'Here I share what I do',
    },
    
  ]

  return (
    <>

      <h1 className={Styles.title}>My social networks:</h1>

      <div className={Styles.socialsContainer}>
        {socialNetworks.map((socialNetwork, index) => (

          <div key={index} className={Styles.card}>
            <p className={Styles.topP}>{socialNetwork.name}</p>

            <div className={Styles.socialNetwork}>
              <Link 
              to={socialNetwork.href} 
              target='_blank' 
              className={Styles.link}>
                {socialNetwork.icon}
              </Link>
            </div>

            <p className={Styles.bottomP}>{socialNetwork.description}</p>

          </div>

        ))}

      </div>
    </>
  )
}
