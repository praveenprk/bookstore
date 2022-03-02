import ProgressBar from 'react-bootstrap/ProgressBar'

const MyLevels = () => {

const levelBarStyle = {
    marginLeft: '1.5em',
    marginRight: '1.5em'
}

const levelHead = {
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    paddingBottom: '0.5rem'
}
 
return (
    <>
        <div className='d-flex flex-row justify-content-between' style={levelHead}>
            <b>Level</b>
            <span>🎉</span>
        </div>
        <ProgressBar className='level-bar' style={levelBarStyle}>
            <ProgressBar striped variant="success" now={60} key={1} />
            <ProgressBar variant="warning" now={40} key={2} />
        </ProgressBar>
    </>
  )
}

export default MyLevels