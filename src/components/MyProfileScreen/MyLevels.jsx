import ProgressBar from 'react-bootstrap/ProgressBar'

const MyLevels = () => {

const levelBarStyle = {
    marginLeft: '1.5em',
    marginRight: '1.5em'
}

const levelSpace = {
    marginLeft: '0.5em',
    fontWeight: '500'
}
 
return (
    <>
        <span style={levelSpace}>Level</span>
        <ProgressBar className='level-bar' style={levelBarStyle}>
            <ProgressBar striped variant="success" now={60} key={1} />
            <ProgressBar variant="warning" now={40} key={2} />
        </ProgressBar>
    </>
  )
}

export default MyLevels