from setuptools import setup, find_packages

setup(
    name='apiverve_rhymingwords',
    version='1.2.3',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Rhyming Words finds matching rhymes for any query word, returning a list of rhyming words and a total match count. Paid plans can adjust the maximum number of rhymes returned.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/wordrhymes?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
