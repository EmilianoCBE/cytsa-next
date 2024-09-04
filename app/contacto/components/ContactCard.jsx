import { FacebookOutlined, InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';

export const ContactCard = ({ text, link, linkText, social }) => {
  return (
    <div className='mb-6'>
      {text && <p className='text-xl py-2 border-b border-[#444444]'>{text}</p>}
      {link && linkText && (
        <div className='mt-4'>
          <a href={link} className='text-red-700 text-lg font-bold'>
            {linkText === 'Whatsapp' ? (
              <div className='flex items-center gap-2'>
                <WhatsAppOutlined style={{ fontSize: '30px', color: '#F97316' }} />
                <span>{linkText}</span>
              </div>
            ) : (
              linkText
            )}
          </a>
        </div>
      )}

      {social && (
        <div className='flex gap-4 mt-4'>
          {social.map((network, index) => (
            <a key={index} href={network.link}>
              {network.icon === 'facebook' && <FacebookOutlined style={{ fontSize: '30px', color: '#F97316' }} />}
              {network.icon === 'instagram' && <InstagramOutlined style={{ fontSize: '30px', color: '#F97316' }} />}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};