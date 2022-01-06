export const Player = ({ track }) => {
  return (
    <iframe
      style={{ position: 'fixed', bottom: 0, left: 0, marginTop: 100 + 'px' }}
      width="100%"
      height="60"
      title="player"
      src={`https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=0&hide_artwork=1&feed=${track.key}`}
      frameBorder="0"
    ></iframe>
  )
}
