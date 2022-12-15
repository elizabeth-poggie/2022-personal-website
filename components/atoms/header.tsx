import Link from 'next/link'
import Text from './Text/text'

const Header = () => {
  return (
    <div className="mb-20 mt-8">
        <Link href="/" className="hover:underline">
          <Text variant="h3">
            I am Poggie.
          </Text>
        </Link>
    </div>
  )
}

export default Header
