function StatItem({ count, title, icon }) {
  return (
    <div className='bg-[#ffffff] p-10 border-[#f6f8fc] shadow-2xl px-4 py-6 m-5'>
      <header className='flex  items-center justify-between'>
        <span className='text-xl md:text-2xl'>{count}</span>
        <div className='text-xl'>{icon}</div>
      </header>
      <h5 className='my-2 text-xl'>{title}</h5>
    </div>
  );
}

export default StatItem;
