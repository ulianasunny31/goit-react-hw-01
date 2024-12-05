import css from'./Profile.module.css'

 const Profile = ({name, tag, location, image, stats}) => {
     return (
<div className={css.profileContainer}>
    <div className={css.shortInfoContainer}>
     <img src={image} alt="User avatar" />
     <p className={css.nameP}>{name}</p>
     <p className={css.shortP}>@{tag}</p>
     <p className={css.shortP}>{location}</p>
    </div>

    <ul className={css.statList}>
     <li className={css.statListItem}>
      <span>Followers</span>
      <span>{stats.followers}</span>
     </li>
     <li className={css.statListItem}>
      <span>Views</span>
      <span>{stats.views}</span>
     </li> 
     <li className={css.statListItem}>
       <span>Likes</span>
       <span>{stats.likes}</span>
     </li> 
    </ul>
</div>
  )
}

export default Profile;